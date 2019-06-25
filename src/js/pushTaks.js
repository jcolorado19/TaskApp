class PushTaks{
    showPushNotification(){
        let mesFecha = '0'

        let dateNowSystem = new Date();
        let anyoFecha = dateNowSystem.getFullYear();
        mesFecha += dateNowSystem.getMonth()+1
        let diaFecha = dateNowSystem.getDate()
        let dateNow = anyoFecha+"-"+mesFecha+"-"+diaFecha

        let tasks = JSON.parse(localStorage.getItem('tasks'))

        for (let i = 0; i < tasks.length; i++) {
            let title = tasks[i].title
            let description = tasks[i].description
            let date = tasks[i].date

            if (dateNow == date) {
                toastr.info(`<h6>${title}</h6><p>${description}</p>`, `<h5 class="text-center">Notificación</h5>`, {
                    "closeButton": true,
                    "progressBar": true,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "20000",
                    "extendedTimeOut": "1000",
                })
            }
        }

    }
}

export default PushTaks