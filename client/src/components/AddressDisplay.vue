<template>
<div>
  <div class="container">
    <div class="result-container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>CARRIER:</strong></span> {{portInfo.carrier}}
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>PORT_OF_ORGIN:</strong></span> {{portInfo.portOfOrgin}}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>DELIVERY_TERMINAL:</strong></span> {{portInfo.deliveryTerminal}}
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>ADDRESS:</strong></span> {{portInfo.address}}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>CITY:</strong></span> {{portInfo.city}}
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>STATE:</strong></span> {{portInfo.state}}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>ZIPCODE:</strong></span> {{portInfo.zipcode}}
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>EXTRA_INFO:</strong></span> {{portInfo.other}}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>DISTANCE:</strong></span> {{distance}} miles
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <span class="label"><strong>DURATION:</strong></span> {{duration}}
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AddressDisplay",
  props: {
    duration:String,
    distance:Number,
    portInfo:Object
  }
}
</script>

<style>
.result-container {
  border: 1px solid;
  -moz-box-shadow:    2px 2px 3px 0.5px #ccc;
  -webkit-box-shadow: 2px 2px 3px 0.5px #ccc;
  box-shadow:         2px 2px 3px 0.5px #ccc;
  text-align: left!important;
  padding: 10px;
}

.label{
  color: #ff0;
}

@media screen and (max-width: 768px){
  .result-container{
    font-size: 13px;
  }
}

</style>