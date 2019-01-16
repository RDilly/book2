const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

const student = (name, sectionContent, info) => {
    return `
        <div id="student">
            ${h1(name, "xx-large")}
            ${section(sectionContent, "gold")}
            ${aside(info, "pushRight")}
        </div>
    `
}

students.forEach(currentStudent => {
    const studentHTMLRepresentation = student(
        currentStudent.name,
        currentStudent.class,
        currentStudent.info)
    document.querySelector("#container").innerHTML += studentHTMLRepresentation
})