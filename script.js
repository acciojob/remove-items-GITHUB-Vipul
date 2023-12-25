//your JS code here. If required.
let submit=document.querySelector('form>input');
submit.onclick=function()
	{
let selected=document.getElementById("colorSelect");
for(let i=0;i<selected.length;i++)
	{
		if(selected.options[i].value==selected.value)
		{
			selected.remove(i);
		}
    }
	};
