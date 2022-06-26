const genEmployeeInfo = (employeeArr) => {
    const cardTemplate = (info) => { 
        return`
                    <div class="card border-info" style="width: 18rem;">
                        <div class="card-body">
                            <section class="w-100 p-3" style="background-color: #eee;">
                                <h5 class="card-title">
                                    Name: ${info.name}
                                </h5>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    Role: ${info.role}
                                </h6>
                            </section>
                            <ul class="list-group list-group-flush p-3">
                                <li class="list-group-item">ID: ${info.employeeId}</li>
                                <li class="list-group-item">Email: <a href="mailto:${info.email}">${info.email}</a></li>
                                ${info.office ? `<li class="list-group-item">Office Number: ${info.officeNumber}</li>`:''}
                                ${info.github ? `<li class="list-group-item">GitHub: <a href="http://github.com/${info.github}" target="_blank">${info.github}</a></li>`:''}
                                ${info.school ? `<li class="list-group-item">School: ${info.school}</li>`:''}
                            </ul>
                        </div>
                    </div>
`   }
        const cardArr = employeeArr.map(employee => (
            cardTemplate(employee)
        ))
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
        <div class="page-header bg-info text-center p-4" style="height: 100px">
            <h1>My Team</h1>
        </div>
        <div class="container p-5">
            <div class="row">
                <div class="card-group">
                    ${cardArr}
                </div>
            </div>
        </div>
    
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = genEmployeeInfo;