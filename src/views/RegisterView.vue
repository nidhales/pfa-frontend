<template>
    <div class="container mt-5" style="margin-bottom: 400px;">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            
            <div class="card px-5 py-5" id="form1">
                <div class="form-data" v-if="!submitted">
                    <div class="forms-inputs mb-4"> <span>First Name</span> <input autocomplete="off" type="text" v-model="username" style="width:100%;" >
                    </div>  
                    <div class="forms-inputs mb-4"> <span>Last Name</span> <input autocomplete="off" type="text" v-model="username" style="width:100%;" >
                    </div>  
                    <div class="forms-inputs mb-4"> <span>Email</span> <input autocomplete="off" type="text" v-model="email" v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}" v-on:blur="emailBlured = true">
                        <div class="invalid-feedback">A valid email is required!</div>
                    </div>
                    <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password" v-model="password" v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}" v-on:blur="passwordBlured = true">
                        <div class="invalid-feedback">Password must be 8 character!</div>
                    </div>
                    <div class="forms-inputs mb-4"> <span>Phone Number</span> <input autocomplete="off" type="text" v-model="phonenumber" style="width:100%;" >

                    </div>
                    <div class="forms-inputs mb-4"> <span>City</span> <input autocomplete="off" type="text" v-model="city" style="width:100%;" >

                    </div>
                   <div class="forms-inputs mb-4"> <span>Code Postal</span> <input autocomplete="off" type="text" v-model="codepostal" style="width:100%;" >
                    </div>
                    <div class="mb-4"> <button v-on:click.stop.prevent="submit" class="btn btn-dark w-100 mb-4">Register</button> </div>
                </div>
                <div class="success-data" v-else>
                    <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span class="text-center fs-1">You have been logged in <br> Successfully</span> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
 name: 'RegisterView',
  data: function () {
    return {
    username : "",
    email : "",
    emailBlured : false,
    valid : false,
    submitted : false,
    password:"",
    phonenumber:"",
    city:"",
    codepostal:"",
    passwordBlured:false
    }
  },

  methods:{

    validate : function(){
this.emailBlured = true;
this.passwordBlured = true;
if( this.validEmail(this.email) && this.validPassword(this.password)){
this.valid = true;
}
},

validEmail : function(email) {
   
var re = /(.+)@(.+){2,}\.(.+){2,}/;
if(re.test(email.toLowerCase())){
  return true;
}

},

validPassword : function(password) {
   if (password.length > 7) {
    return true;
   }
},

submit : function(){
this.validate();
if(this.valid){
this.submitted = true;
}
}
  }
}

</script>

<style scoped>
body{background: #000}.card{border: none;height: 320px}
.forms-inputs{position: relative}
.forms-inputs span{position: absolute;top:-18px;left: 10px;background-color: #fff;padding: 5px 10px;font-size: 15px}
.forms-inputs input{height: 50px;border: 2px solid #eee}
.forms-inputs input:focus{box-shadow: none;outline: none;border: 2px solid #000}
.btn{height: 50px}
.success-data{display: flex;flex-direction: column}
.bxs-badge-check{font-size: 90px}
</style>