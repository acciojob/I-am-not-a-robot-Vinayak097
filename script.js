//your code here
const imgContainer= document.getElementById('img-container');
let randomImgn=3
const verify=document.getElementById('verify')
const reset=document.getElementById('reset')
const h=document.getElementById('para')


let selectedimg=[];
renderMain()
function renderMain(){
	imgContainer.innerHTML=""
	randomImgn=Math.floor(Math.random() *4);
	 
	verify.style.display='none'
reset.style.display='none'
	
	
for(let i=1;i<=5;i++){
	const imgtag=document.createElement('img')
	imgContainer.appendChild(imgtag)
	imgtag.alt='image';
	imgtag.classList.add(`img${i}`)
	imgtag.style.cursor='pointer'
	addEventclickforimage(imgtag)
}
	addsiximg()
	
}


function addsiximg(){
	const imgtag=document.createElement('img')
	imgtag.classList.add(`img${randomImgn}`)
	imgContainer.appendChild(imgtag)
	imgtag.innerHTML=randomImgn;
	addEventclickforimage(imgtag)
	
}
verify.addEventListener('click',()=>{
	if(selectedimg.length==2){
		if(selectedimg[0]==selectedimg[1]){
			h.textContent="You are a human. Congratulations!"
		}else{
			h.textContent="We can't verify you as a human. You selected the non-identical tiles."
			reset.style.display='block'
		}
	}
	
})
reset.addEventListener('click',()=>{
	
	selectedimg=[]
	renderMain()
	
})
function addEventclickforimage(imgtag){
	imgtag.addEventListener('click',()=>{
		
		reset.style.display='inline'
		if(selectedimg.length!=2){
			h.textContent=""
			imgtag.style.padding='2px'
			classN=imgtag.className;
			
			selectedimg.push(imgtag.className)
		}
		if(selectedimg.length==2){
			
			
				
				verify.style.display='inline'
			
			
		}
		
	})
}

