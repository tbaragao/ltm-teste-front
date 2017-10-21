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
 - **main**, layout do administrativo com seus subcomponentes.
  - Template
  - Dashboard
  - Produto  
 - **util**, componentes auxiliares específicos do projeto.

Segurança no front está baseada no `AuthGuard` e sessão armazeada em *cookie*.
A estrutura já está preparada (faltando alguns ajustes) para trabalhar com multi-idioma.

> **Notas** A arquitetura do projeto e novas funcionalidade estão sendo desenvolvidas e utilizarei este projeto futuramente para estudo, testes e novas funcionalidades para aplicar em outros projetos.

#### Funcionalidades
O SPA contém um estrutura de uma painel administrativo
- Dashboard (vazio)
- Produtos
  - Filtros
  - Listagem
  - Exportar (*.xls)
  - Criar
  - Deletar
  - Editar
  - Detalhes
  - Impressão
- Login (sessão com duração de 60 segundos)

#### Versões utilizada no desenvolvimento
    @angular/cli: 1.4.9
    node: 6.11.3
    os: win32 x64
    @angular/animations: 4.4.6
    @angular/common: 4.4.6
    @angular/compiler: 4.4.6
    @angular/core: 4.4.6
    @angular/forms: 4.4.6
    @angular/http: 4.4.6
    @angular/platform-browser: 4.4.6
    @angular/platform-browser-dynamic: 4.4.6
    @angular/router: 4.4.6
    @angular/cli: 1.4.9
    @angular/compiler-cli: 4.4.6
    @angular/language-service: 4.4.6
    typescript: 2.3.4
