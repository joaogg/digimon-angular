import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

  constructor() { }

  lifeA = 100;
  staminaA = 100;
  attackA = 0;

  lifeB = 100;
  staminaB = 100;
  attackB = 0;

  desabilitaBotao = false;
  timeLeft: number = 3;
  interval;
  exibeSegundos = false;


  ngOnInit(): void {
  }

  atack() {

    if(this.lifeA <= 0){
      alert("Tentomon venceu!");
    }

    if(this.lifeB <= 0){
      alert("Terriermon venceu!");
    }

    this.desabilitaBotao = true;

    if (this.lifeA >= 0 && this.lifeB >= 0) {

      this.exibeSegundos = true;

      this.attackA = Math.floor(Math.random() * 30) + 1;
      this.attackB = Math.floor(Math.random() * 30) + 1;
  
      this.staminaA = this.staminaA - Math.floor(Math.random() * 10) + 1;
      this.staminaB = this.staminaB - Math.floor(Math.random() * 10) + 1;
  
      this.lifeA = this.lifeA - this.attackB;
      this.lifeB = this.lifeB - this.attackA;

      $("ol").append("<li>Terriermon atacou Tentomon! <span class='badge badge-success'> + " + this.attackA + "</span> <span class='badge badge-danger'> + " + this.lifeA + "</span></li>");
      $("ol").append("<li>Tentomon atacou Terriermon! <span class='badge badge-success'> + " + this.attackB + "</span> <span class='badge badge-danger'> + " + this.lifeB + "</span></li>");
  

      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 0;
          this.desabilitaBotao = false;
          this.exibeSegundos = false;
        }
      }, 1000)

    }

    this.timeLeft = 3;

  }


  pauseTimer() {
    clearInterval(this.interval);
  }


  insert() {

    const that = this;



  }

}
