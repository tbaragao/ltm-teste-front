Projeto LTM Teste
===================

Projeto desenvolvido como teste para LTM/Mootit

----------

Apresentação
-------------
SPA desenvolvido em Angular 4 integrado com aplicação SSO e WebApi

#### Iniciando
- Clonar o repositório
- Navegar até a pasta e executar `npm install`
- Após a conclusão execute `ng serve --open`

#### Dependências
Precisará que o projeto de backend esteja rodando, junto com o SSO - [Acessar projeto back](https://github.com/brunoseco/ltm-teste-back). 

> **Atenção:**
O projeto SPA precisa estar rodando na porta `:4200`

#### Estrutura
O projeto está dividido em seus componentes, sendo eles:

 - **login**, onde é feito todo o gerenciamento da sessão do usuário.
 - **common**, estão os components, serviços e diretivas compartilhados podendo ser utilizado em outros projetos.
	 - grid
	 - confirm-modal
	 - multi-select
	 - pagination
	 - loading
	 - upload
	 - api service
	 - auth
	 - etc...
 - **main**, layout do administrativo com seus subcomponentes, neste caso está o *produto*.
 - **util**, componentes auxiliares específicos do projeto.

Segurança no front está baseada no `AuthGuard` e sessão armazeada em *cookie*.
A estrutura já está preparada (faltando alguns ajustes) para trabalhar com multi-idioma.

> **Notas** A arquitetura do projeto e novas funcionalidade estão sendo desenvolvidas e utilizarei este projeto futuramente para estudo, testes e novas funcionalidades para aplicar em outros projetos.
