//your code here
const imgContainer= document.getElementById('img-container');
const arr=[
	
]
for(let i=0;i<5;i++){
	const imgtag=document.createElement('img')
	imgContainer.appendChild(imgtag)
	imgtag.alt='image'
	imgtag.src=arr[i]
	
}
