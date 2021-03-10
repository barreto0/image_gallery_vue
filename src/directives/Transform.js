import Vue from 'vue';

Vue.directive('my-transform',{
  bind(el, binding, vnode) {
    let current = 0;
    el.addEventListener('dblclick', function() {
      let increment = 90;
      let animate = false;

      // binding.value da acesso ao parametro passado a diretiva no component/elemento que a usa


      if(binding.value){
        increment = binding.value.increment;
        animate = binding.value.animate;
      }
      current+=increment;
      this.style.transition = 'transform 0.5s';
      this.style.transform = `rotate(${current}deg)`;
    });
  }
});
