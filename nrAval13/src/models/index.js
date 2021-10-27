import React, { Component } from 'react';

//importando as páginas
import InspecaoExterna1 from "../pages/InspecaoExterna1";
//import InspecaoExterna2 from "../pages/InspecaoExterna2";
//import InspecaoExterna3 from "../pages/InspecaoExterna3";
//import InspecaoExterna4 from "../pages/InspecaoExterna4"; 
 
//verificar diferenças entre os objetos e classes no js e ver oque estã faltando 

export class ExternaItem extends Component{
  constructor() {
    constructor(id, viacirculacao, selectedescada); {
      this.id = id;
      this.viacirculacao = viacirculacao;
      this.selectedescada = selectedescada;
      // this.selectedValuese = selectedValuese;
      // this.selectedValuecds = selectedValuecds;
      // this.selectedValuepur = selectedValuepur;
      // this.selectedValuemdn = selectedValuemdn;
      // this.selectedValuedc = selectedValuedc;
      // this.selectedValuedcobs = selectedValuedcobs;
      //criando uma variavel parq teste inicializando um objeto com as chamadas
      //var inspecao1 = new ExternaItem(1, InspecaoExterna1.viacirculacao, InspecaoExterna1.selectedescada, InspecaoExterna2.selectedValuese, InspecaoExterna2.selectedValuecds, InspecaoExterna3.selectedValuepur, InspecaoExterna3.selectedValuemdn, InspecaoExterna4.selectedValuedc, InspecaoExterna4.selectedValuedcobs );
    }

    var inspecao1 = new ExternaItem(1, InspecaoExterna1.viacirculacao, InspecaoExterna1.selectedescada);
    //criando variavel para teste inicializando um objeto com strings
    var inspecao2 = new ExternaItem(2, "try", "try", "try", "try", "try", "try", "try", "try");
 
    //getitems
    //  console.log(inspecao1);
    //  console.log(inspecao2); 
  }
};

