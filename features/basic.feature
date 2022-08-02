Feature: Login
  Eu como usuário 
  Gostaria de fazer login
  Para acessar o sistema
  Scenario: login com sucesso
    Given I fill e-mail
    And  I fill password
    When I tap on Entrar
    Then I see the Salvar button 

