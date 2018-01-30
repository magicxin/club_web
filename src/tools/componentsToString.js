export default function(data){
	console.log(data.attribute)
	let attributes = ''
	let template = ''
	for(let key in data.attribute){
		if(data.attribute[key]){
			attributes += `${key}=${data.attribute[key]} `
		}
//		else{
//			attributes += ''
//		}
}
	template = `<${data.name} ${attributes}>${data.show}</${data.name}>`
	if (template.indexOf(`id="${data.id}"`) == -1)
        template = template.replace(' ', ` id="${data.id}" `)
	return template
}
