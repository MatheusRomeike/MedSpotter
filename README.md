# MedSpotter

## funcionalidades

-médico:
crud agenda
pagina medico

-paciente:
crud atendimento/consulta
crud dependente
crud avaliacao

## fluxo principal

paciente entra -> agendamento -> escolhe localidade -> escolhe especialidade -> escolhe convenio -> escolhe médico -> escolhe data e horario -> confirmar agendamento

## matheus

~~-login +~~
~~-cadastro ++~~
~~switch pra selecionar tipo (paciente ou profissional)~~

~~-comp. sidebar ++~~
~~inicio e sair~~
~~paciente: agendar, historico, perfil e dependente~~
~~profissional: agenda, historico, perfil~~

-cadastro informacoes medico ++++
crudzao informando especialidade, serviços prestados (multi-select)
locais de atendimento

~~-cadastro informacoes paciente ++~~
~~crudzao paciente~~

-historico agendamentos paciente ++
listagem

-inicio +
estruturar informacoes uteis na tela inicial

## guilherme

-comp. agenda +++
selecionar data e horario, respeitando cadastro de horario do medico

-comp. agendar atendimento/consulta +++++
fluxo principal

-avaliar agendamento paciente +
opçao de avaliar e apagar avaliacao

-perfil medico +++
foto, nome, especialidades, avaliações, listagem de endereços

-cad. dependente +
novo, editar ou apagar. com nome, cpf e data de nascimento.

-inicio +
chamada do componente de pesquisa e informações uteis

## banco

pessoa
-paciente
-dependentes
*agendamentos
-profissional
-endereços
*agendamentos

agendamentos
-avaliacoes
-endereços
