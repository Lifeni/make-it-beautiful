import checkPage from './libs/checkPage'

checkPage().then(async result => {
  if (result.ok) {
    const app = await import(/* webpackMode: "eager" */ './components/App')
    app.renderApp(result)
  }
})
