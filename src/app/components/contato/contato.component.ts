import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

	form!: FormGroup;
	name: FormControl = new FormControl("", [Validators.required]);
	email: FormControl = new FormControl("", [Validators.required, Validators.email]);
	message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
	honeypot: FormControl = new FormControl(""); // usaremos isso para evitar spam
	submitted: boolean = false; // mostrar e ocultar a mensagem de sucesso
	isLoading: boolean = false; // desative o botão enviar se estivermos carregando
	responseMessage!: string; // a mensagem de resposta para mostrar ao usuário
	constructor(private formBuilder: FormBuilder, private http: HttpClient) {
		this.form = this.formBuilder.group({
			name: this.name,
			email: this.email,
			message: this.message,
			honeypot: this.honeypot
		});
	}
	ngOnInit(): void {
	}
	onSubmit() {
		if (this.form.status == "VALID" && this.honeypot.value == "") {
			this.form.disable(); // desative o formulário se for válido desativar vários envios
			var formData: any = new FormData();
			formData.append("name", this.form.get("name")!.value);
			formData.append("email", this.form.get("email")!.value);
			formData.append("message", this.form.get("message")!.value);
			this.isLoading = true; // enviando a solicitação de postagem assíncrona para que esteja em andamento
			this.submitted = false; // ocultar a mensagem de resposta em vários envios
			this.http.post("https://script.google.com/macros/s/AKfycbx-mE1qXWVMhPOt7Djqwi22O4nFx5oXMJtGfPHjypwysz3RZH_myfmmJv0n6t3AvOmf/exec", formData).subscribe(
				(response: any) => {
					// choose the response message
          console.log(response);
					if (response["result"] == "success") {
						this.responseMessage = "Obrigado pelo seu contato! Retornaremos em breve!";
					} else {
						this.responseMessage = "Ops! Algo deu errado... Recarregue a página e tente novamente.";
					}
					this.form.enable(); // reativar o formulário após um sucesso
					this.submitted = true; // mostrar a mensagem de resposta
					this.isLoading = false; // reative o botão enviar
					console.log(response);
				},
				(error) => {
					this.responseMessage = "Ops! Ocorreu um erro... Recarregue a página e tente novamente.";
					this.form.enable(); // reativar o formulário após um sucesso
					this.submitted = true; // mostrar a mensagem de resposta
					this.isLoading = false; // reative o botão enviar
					console.log(error);
				}
			);
		}
	}
}