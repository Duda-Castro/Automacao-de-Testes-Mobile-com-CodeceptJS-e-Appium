Feature('Students');

const {I, login_page, home_page} = inject( )

Scenario('Add students with success', () => {

    login_page.doLogin('teste@teste.com','123456')
    home_page.registerStudent('9090', 'fernando silveira')
    home_page.searchStudent('fernando silveira', '9090')

})