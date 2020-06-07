<template>
    <div class="attributeset">
        <div class="attributebox">
            <div class="attributesetname">
                 <p>预 警 参 数 设 置</P>
            </div>
            <div class="setbolt">

              <P class="boltp">锚杆(索)受力指标权重系数</P>
              <el-input
               
                v-model="bolt"
                clearable>
              </el-input>
            </div>
            <div class="setroof">
              <P class="roofp">顶板离层危险指数</P>
               <el-input
               
                v-model="roof"
                clearable>
              </el-input>
            </div>
            <div class="settunnel">
              <P class="tunnelp">巷道表面位移指标权重系数</P>
              <el-input
             
                v-model="tunnel"
                clearable>
              </el-input>
            </div>
            <div class="setok">
               <el-button type="primary" round>确认</el-button>
               <el-button round>重置</el-button>
            </div>
        </div>
        
     </div>

         
  
</template>

<script>
export default {
   data() {
     return {
       bolt:'',
       roof:'',
       tunnel:''
     }
   },
    methods: {

    },
  
}
</script>

<style lang="scss">
   .attributeset{
     text-align: center;
     display: flex;
     width: 100%;
     height: 100%;
     background:#30364c;
     align-items: center;
     .attributebox{
       background:#30364c;
       margin-left: 420px;
       box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding-left:80px ;
        width: 560px;
        height: 380px;  
        border: 1px solid white;
        .attributesetname{
          margin-top:40px;
  
          width: 400px;
          height: 60px;  
          margin-bottom: 0px;
          p{
            color: #409EFF;
            font-size: 30px;
            font-weight: 900;
          }
        }
        .setbolt{
          align-items: center;
          display: flex;
          width: 400px;
          height: 60px;  
          .boltp{
            margin-right: 5px;
            text-align: right;
            width: 400px;
            color: white;
          }
          
          
        }
        .setroof{
          align-items: center;
          display: flex;
          width: 400px;
          height: 60px;  
          .roofp{
            margin-right: 5px;
            text-align: right;
            width: 400px;
            color: white;
          }
        }
        .settunnel{
          align-items: center;
          display: flex;
          width: 400px;
          height: 60px;  
          .tunnelp{
            margin-right: 5px;
            text-align: right;
            width: 400px;
            color: white;
          } 
        }
       .setok{
         align-items: center;
          display: flex;
          width: 400px;
          height: 60px;  
         
          .el-button{
             margin-left: 80px;
          }
       }
     }
   }
    
</style>