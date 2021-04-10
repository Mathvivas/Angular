import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  profissoes: string[] = [
    'Engenheiro',
    'Professor',
    'Químico',
    'Zoólogo',
    'Advogado'
  ]

  salvar(pessoaForm: NgForm): void {
    const nome = pessoaForm.value.nome
    const fone = pessoaForm.value.fone
    const email = pessoaForm.value.email
    const profissao = pessoaForm.value.profissao
    console.log(`
      Nome: ${nome},
      Telefone: ${fone},
      Email: ${email},
      Profissão: ${profissao}
      `)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
