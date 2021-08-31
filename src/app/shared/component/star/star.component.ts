import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
                                                //com o on init não temos a garantia do momento exato em que a informação que estamos passando será carregada.
export class StarComponent implements OnChanges{// por isso uilizaremos on change para passarmos o valor. assim que ele receber o valor da requisição http, ele vai identificar e o valor sera atribuido à variavel.

  @Input()//faz com que a nossa variàvel seja elegivel para receber um valor de um componete externo
  rating: number = 0;

  starWidth!: number;

  ngOnChanges(): void{
    this.starWidth = this.rating * 74 / 5;//this.rating * 94 / 5;
  }

}
