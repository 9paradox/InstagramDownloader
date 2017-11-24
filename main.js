
function addDownloadButton(src){
	var img_src = src; 
	var ahref = document.createElement('a');
	ahref.innerHTML="Download";
	ahref.setAttribute('class', "_eszkz _l9yih");
	ahref.setAttribute('style', "background-color:#00acc1;color:#ffff;margin :10px");
	ahref.setAttribute('href', img_src);
	ahref.setAttribute('download', 1);
	document.getElementsByClassName("_hmd6j _8oo9w")[0].appendChild(ahref);
};

document.addEventListener('click', function(e) {
	console.log(e);
	console.log(e.target.getElementsByClassName("_2di5p")[0]);
	console.log(e.target.parentNode);
	console.log(e.target.parentNode.className);
	if(e.target.parentNode.className == "_e3il2 _gxii9" || e.target.parentNode.className == "_e3il2 _pmuf1"){
		/*
		_4rbun
		_2di5p
		*/
		addDownloadButton(e.target.parentNode.getElementsByClassName('_4rbun')[0].getElementsByClassName("_2di5p")[0].getAttribute("src"));
	}
	
	if(e.target.parentNode.className == "_6jl3c"){
		addDownloadButton(e.target.parentNode.getElementsByClassName("_2xkvu _msp39")[0].getElementsByClassName('_qzesf')[0].getElementsByClassName('_l6uaz')[0].getAttribute("src"));
	}
});
	
