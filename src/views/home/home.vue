<template>
    <div class="main">
         <div class="warning">
             <div class="allworker">
                  <el-scrollbar style="height: 100%;">
                     <div v-for="(item,index) in group1" :key=index class="setline">
                         <div v-for="(item,right) in array1[index]" :key=right class="littlebox">
                              <div class="boxnum" :class="[Istate[index*4+right]]">
                                   <p>{{good[index*4+right].l}}</p>  
                               </div>
                         </div>
                     </div>
                  </el-scrollbar>  
             </div>
             <div class="earlywarning " :class="[(this.machinesafe==true)?'ewbg':'']">
                 <div class="normal" v-if="this.machinesafe">
                          {{numofmachines}}
                 </div>
                 <div v-else class="error">
                     <p>有问题的机器序号：{{dangermachine}}</p>
                 </div>
             </div>
         </div>
         <div class="show">
            <div class="table">
              
                  <!-- 注意需要给 el-scrollbar 设置高度，判断是否滚动是看它的height判断的 -->
                  <el-scrollbar style="height: 100%;"> <!-- 滚动条 -->
                      <div class="card " v-for="(item,ln) in group" :key=ln>
                         <div class="carditem " :class="state[ln*4+index]" v-for="(item,index) in array[ln]" :key="index" @click="gotomachine(ln*4+index+1)">
                             <div class="num">
                               <div class="p" :class="[Istate[ln*4+index]]">
                                   <p>{{good[ln*4+index].l}}</p>  
                               </div>
                             </div>
                             <div class="data">
                               <div class="machinenum" >
                                  {{ln*4+index+1}}
                               </div>
                               <div class="ar" :class="[Iastate[ln*4+index]]">
                                  <p>{{good[ln*4+index].a}}</p>  
                               </div>
                                <div class="ar1" :class="[Ibstate[ln*4+index]]">
                                  <p>{{good[ln*4+index].b}}</p>  
                               </div>
                                <div class="ar2" :class="[Icstate[ln*4+index]]">
                                  <p>{{good[ln*4+index].c}}</p>  
                               </div>

                              </div>  
                         </div>
                      </div>
                  </el-scrollbar><!-- /滚动条 -->
              </div>
            </div>
         
    </div>
</template>

<script>
export default {
    data() {
      return {
        numofmachines:10,
        state:[],
        group:'',
        group1:'',
        good:[{l:0.65,a:0.2,b:0.02,c:0.65},{l:0.65,a:0.3,b:0.02,c:0.5},{l:0.65,a:0.3,b:0.2,c:0.65},{l:0.65,a:0.2,b:0.02,c:0.7},{l:0.65,a:0.7,b:0.02,c:0.1},{l:0.65,a:0.1,b:0.06,c:0.7},{l:0.65,a:0.3,b:0.01,c:0.7},{l:0.65,a:0.1,b:0.04,c:0.7},{l:0.65,a:0.35,b:0.01,c:0.7},{l:0.65,a:0.25,b:0.02,c:0.7}],
        array:[],
        array1:[],
        machinesafe:true,
        dangermachine:[],
        Ia:[],
        Ib:[],
        Ic:[],
        Iastate:[],
        Ibstate:[],
        Icstate:[],
        Istate:[],
        k:[0.5,0.3,0.2]
      };
    },
    methods: {
      //组别计算
      computegroup:function(){             
        let temp,intnum,surplus,temp1,intnum1,surplus1
        temp=Math.ceil(this.numofmachines/4)
        this.group=temp
        intnum=Math.floor(this.numofmachines/4)
        surplus=this.numofmachines%4
        for(let i=0;i<intnum;i++)
        {
          this.array.push(4)
        }
        this.array.push(surplus)

        temp1=Math.ceil(this.numofmachines/10)
        this.group1=temp1
        intnum1=Math.floor(this.numofmachines/10)
        surplus1=this.numofmachines%8
        for(let i=0;i<intnum1;i++)
        {
          this.array1.push(10)
        }
        this.array1.push(surplus)
        console.log(this.array1)
      },
      //页面跳转
      gotomachine:function(a){         
        this.$router.push('/machine/'+a)
      },
      //判断是否全是安全的
      safeordanger:function(){         
        let b=1;
        for(let i=0;i<this.numofmachines;i++ )
        {
          if(this.state[i]!='safe')
          {
            b=0;
            this.dangermachine.push(String(i+1))
          }
        }
        if(b==0)
        {
          this.machinesafe=false
        }
      },
      //对la进行计算
      setla:function(){                  
          let temp
          for(let i=0;i<this.numofmachines;i++)
          {
             temp=(this.good[i].a)/(this.k[0])
             if(temp<=0.2)
             {
               this.Ia.push(0.2)
               this.Iastate.push('moredangerfont')
             }
             else if(temp>0.2&&temp<=0.5)
             {
               this.Ia.push(temp)
               this.Iastate.push('safefont')
             }
             else if(temp>0.5&&temp<=0.7)
             {
               this.Ia.push(temp)
               this.Iastate.push('dangerfont')
             }
             else
             {
               this.Ia.push(1)
               this.Iastate.push('verydangerfont')
             }
          }
      },
      //对lb进行计算
      setlb:function(){               
         let temp
          for(let i=0;i<this.numofmachines;i++)
          {
             
             if(this.good[i].b<=0.1*this.k[1])
             {
               this.Ib.push(0.2)
               this.Ibstate.push('safefont')
             }
             else if(this.good[i].b>0.1*this.k[1]&&this.good[i].b<=0.3*this.k[1])
             {
               this.Ib.push(0.45)
               this.Ibstate.push('dangerfont')
             }
             else if(this.good[i].b>0.3*this.k[1]&&this.good[i].b<=0.5*this.k[1])
             {
               this.Ib.push(0.8)
               this.Ibstate.push('moredangerfont')
             }
             else
             {
               this.Ib.push(1)
               this.Ibstate.push('verydangerfont')
             }
          }
      },
      //对lc进行计算
      setlc:function(){
         let temp
          for(let i=0;i<this.numofmachines;i++)
          {
             temp=(this.good[i].c)/(this.k[2])
             if(temp>=0.9)
             {
               this.Ic.push(0.2)
               this.Icstate.push('safefont')
             }
             else if(temp>=0.7&&temp<=0.9)
             {
               this.Ic.push(temp)
               this.Icstate.push('dangerfont')
             }
             else if(temp=>0.5&&temp<0.7)
             {
               this.Ic.push(0.8)
               this.Icstate.push('moredangerfont')
             }
             else
             {
               this.Ic.push(1)
               this.Icstate.push('verydangerfont')
             }
          }
      },
      //设置目前的总状况
    setstate:function(){
      let a=0,b=0,c=0,d=0
      for(let i=0;i<this.numofmachines;i++)
      {
        if(this.Iastate[i]=='safefont')
        {
          a+=1
        }
        else if(this.Iastate [i]=='dangerfont')
        {
          b+=1
        }
        else if(this.Iastate [i]=='moredangerfont')
        {
          c+=1
        }
        else {
          d+=1
        }
        if(this.Ibstate[i]=='safefont')
        {
          a+=1
        }
        else if(this.Ibstate [i]=='dangerfont')
        {
          b+=1
        }
        else if(this.Ibstate [i]=='moredangerfont')
        {
          c+=1
        }
        else {
          d+=1
        }
        if(this.Icstate[i]=='safefont')
        {
          a+=1
        }
        else if(this.Icstate [i]=='dangerfont')
        {
          b+=1
        }
        else if(this.Icstate [i]=='moredangerfont')
        {
          c+=1
        }
        else {
          d+=1
        }
        if(d>0){
         this.state[i]='verydanger'
        }
        else if(c>0)
        {
          this.state[i]='moredanger'
        }
        else if(b>0){
         this.state[i]='danger'
        }
        else{
          this.state[i]='safe'
        }
        a=0,b=0,c=0,d=0
      }
    },
    //对I的状态进行设置
    setIstate:function(){
      for(let i=0;i<this.numofmachines;i++)
      {
        this.Istate[i]=this.state[i]+'font'
      }
    }  
    },
    beforeMount(){
      this.computegroup()
      this.setla()
      this.setlb()
      this.setlc()
      this.setstate() 
      this.setIstate()
      this.safeordanger()
      console.log(this.Istate)
    }
    ,
    mounted() {
       
window.setInterval(() => {
  setTimeout(this.fun, 0)
}, 3000)
    },
}
</script>
<style lang="scss">
.main{
  height:100%;
  width: 100%;
  background:url(../../img/主界面底图.jpg);
  background-size:100%,100%;
  .warning{
      height:330px;
      width: 100%;
      display: flex;
      
      .allworker{
        margin-top:85px;
        margin-left:58px ;
        height:240px;
        width:758px ;
       
      .el-scrollbar__wrap          
         {        
          overflow-x: hidden; 
          .setline{
            height:60px;
            width:758px ;
            display: flex;
            .littlebox{
               height:60px;
               width:75.8px ;   
               border: 1px solid white;
               .boxnum{
                 text-align: center;
                 font-weight: 800;
                 font-size: 18px;;
               }
            }
          }
         }
      }
      .earlywarning{
        margin-top:85px;
        margin-left:17px;
        height:238px;
        width: 479px;
       
        .normal{
        height:100px;
        width: 200px;
        text-align: center;
        font-size: 80px;
        color: white;
        font-style: italic;
        margin-top: 40px;
        margin-left: 110px;;
        font-weight: 900;
        }
        .error{
           font-weight: 900  ;
           color: red;
           font-size:20px;
           text-overflow: ellipsis;
        }
      }
      .ewbg{
        background:url(../../img/预警情况.jpg);
        background-size: 100%;
      }
  }
  .show{
      margin-top:5px;
      height:365px;
      width: 100%;
      display: flex;
      .table{
        margin-left: 64px;
        height:360px;
        width: 1220px; 
      
        .el-scrollbar__wrap          
         {        
          overflow-x: hidden; 
          .card{  
            margin-bottom:10px; 
            height:200px;
            width: 1220px;
            display:flex ;
            .carditem{
             height:200px;
             width: 277px;
             margin-right: 20px;
             display: flex;
             cursor: pointer;

             .num{
             height:200px;
             width: 140px;
             
             .p{
              height:100px; 
              width: 100px;
              text-align: center;
              margin-left:30px;
            
              font-size: 40px;
              margin-top:65px;
              font-style: italic;
              font-weight: 700;
             }
             }
             .data{
             height:200px;
             width: 137px;
            
             .machinenum{
               height:25px;
               width: 30px;
               font-size: 16px;
               color: white;
               
               font-style: italic;
               margin-left: 118px;
             }
             .ar{
             
               height:25px;
               width: 137px;
               margin-left: 80px;
               font-size: 20px;
               
               margin-top:47px;
              font-style: italic;
             }
             .ar1{
               height:20px;
               width: 137px;
               margin-left: 80px;
               font-size: 20px;
               
               font-style: italic;
               
             }
             .ar2{
               height:30px;
               width: 137px;
               margin-left: 80px;
               font-size: 20px;
               font-style: italic;
               
              margin-top:25px;
              
             }
             }
            }
          }
          .safe{
            background:url(../../img/正常.jpg);
            background-size: 100% 100%;
          }
          .danger{
            background:url(../../img/危险.jpg);
            background-size: 100% 100%;
          }
          .moredanger{
            background:url(../../img/比较危险.jpg);
            background-size: 100% 100%;
          }
          .verydanger{
            background:url(../../img/非常危险.jpg);
            background-size: 100% 100%;
          }
                     }
      }
  }
}
.dangerfont{
  color:#ec6941;
}
.moredangerfont{
  color:#e4007f
}
.verydangerfont{
  color:#f20405
}
.safefont{
  color: #32ded0;
}
.el-scrollbar__bar .is-horizontal{
 display: none;
}
</style>