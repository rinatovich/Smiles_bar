window.onload = ()=>{
	

		
	function AddEmojiPanel(parrentContainer,btn,input){
		function createElement(el, className, value){
			let temp = document.createElement(el);
			temp.classList.add(className);
			if(value != undefined || value != null){
				temp.innerHTML = value;
			}
			return temp;
		}
		function emojisPanel(){
			let emojisPanel = createElement('div','emojisContainer');
			let headers = createElement('div','headers');
			let groups =createElement('div','groups');
			let group,header,currentGroup;
			let emoji = {
				Emotions: ['😀','😃','😄','😁','😆','😅','😂','🤣','☺️','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','🤲','👐','🙌','👏','🤝','👍','👎','👊','✊','🤛','🤜','🤞','✌️','🤟','🤘','👌','🤏','👈','👉','👆','👇','☝️','✋','🤚','🖐','🖖','👋','🤙','💪','🙏'],
				Nature: ['🌞','🌝','🌛','🌑','🌜','🌚','🌕','🌖','🌗','🌘','🌒','🌓','🌔','🌙','🌎','🌍','🌏','🪐','💫','⭐️','🌟','✨','⚡️','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅️','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄️','🌬','💨','💧','💦','☔️','☂️','🌊','🌫'],
				FoodDrink: ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌶','🌽','🥕','🧄','🥔','🧅','🍠','🥐','🥯',"🍞",'🥖','🥨','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮','🌯','🥗','🥘','🥫','🍝','🍜','🍲','🥃','🍸','🍹','🧉','🍾','🧊','☕️','🍵','🧃','🍩','🍿','🍫','🧁','🍰',"🎂",'🍮','🍭','🍬'],
				Activities: ['⚽️','🏈','⚾️','🥎','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🏑','🥍','🥅','⛳️','🪁','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛷','⛸','🥌','🎿','⛷','🏂','🪂','🏆','🥇','🥈','🥉','🎖','🎗','🎫','🎟','🎨','🎬','🥁','🎷','🎺','🎸','🪕','🎻','🎲','♟','🎯','🎳','🎮','🎰','🧩','🎹','🎤','🎧','🎼'],
				Travel:['🚗','🚕','🏎','🚑','🚒','🚐','🚛','🚔','🚄','🚅','✈️','🚀','🛩','⛴','🚁','🛸','🚦','🚧','⛰','🏖','🏝','🏕','⛺️','🏠','🏚','🏣','🏢','🕋','🕌','🛣','🗾','🌅',"🌠",'🌌','🌉','⛩'],
				Things: ['📱','⌚️','💻','🖥','🖨','💽','💾','💿','🎥','📽','☎️','📺','⏱','⌛️','⏳','🧯','💸','💴','💵','💷','💳','💎','⚖️','🧰','🔧','⚒','⛏','🔩','⚙️','⛓','🧲','🔫','💣','🧨','🪓',"🔪",'🗡','🛡','🛁','🪒','🧽','🎈','🎁','🧸','🏮','📨','💌','📥','📤','📬','📭','📫','📪','📒','📊','📈','📉','🗓','🗳','📅','📅','📋','📁','📂','🗂','🗞','📓','📔','📒','📕','📗','📘','📖','📚','✂️','📎','🔗','📌','📍','📏','🧮','✒️','🖋','📝','🖇',"📐",'🖋','📝','🖍',"🖌","🔏",'🔐','🔍'],
				Signs: ['❤️','🧡','💛','💙','💜','⚛️','🉑','☢️','☣️','📳','🅱️',"🆎",'🆑','🅾️','🆘',"❌",'⭕️','🛑','⛔️','📛','🚫','💯','🔱','⚜️','🔰','♻️','✅','🈯️','💹','❇️','✳️',"🚾",'♿️','🅿️','🈳','🈂️',"🛂","🛄",'🛅','🚹','🚺','🚼','🔡','🔠','⏏️','▶️','⏸','⏯','⏹','⏺','⏭','⏮','⏩','⏪',"⏫",'⏬','◀️','🔼','🔽','➡️','⬅️','⬆️','⬇️','↗️','↘️','↙️','↖️','↕️','🎵','🎶','➕','➖','➗','✖️','♾','💲','✔️','☑️','🔘','🔴',"🟠",'🔈','🔇','🔉','🔊','🔔','🔕','📣','📢','💬','💭','🗯','♠️','♠️','♣️','♥️','♦️','🕐']
			}
			let emojiGroupsName = ['<i class="fas fa-smile-beam"></i>','<i class="fas fa-cloud"></i>','<i class="fas fa-pizza-slice"></i>','<i class="fas fa-snowboarding"></i>','<i class="fas fa-plane"></i>','<i class="fas fa-cube"></i>','<i class="fas fa-icons"></i>'];

			emojisPanel.appendChild(headers);
			emojisPanel.appendChild(groups);

			let j=0;
			for(let i in emoji)
			{

				header = createElement('div','header');
				header.innerHTML = `${emojiGroupsName[j]}`;
				headers.appendChild(header);
				group = createElement('div','group');
				for(let j=0; j<emoji[i].length; j++)
				{
					group.appendChild(createElement('div','emoji',emoji[i][j]));
				}
				groups.appendChild(group);
				j++;
			}
			groups.firstChild.classList.add('activeGroup');
			return emojisPanel;
		}
		function tabSwitcher(tabHeaders,tabBodies,activeHeader,activeBody){
			let header = tabHeaders.childNodes;
			let bodies = tabBodies.childNodes;

			function deactiveElements(el,className,display = false){
				for(let i=0; i<el.length; i++){
					if(el[i].classList.contains(className))el[i].classList.remove(className);
					if(display)el[i].style.display = 'none'
				}
			}



			for(let i=0; i<header.length; i++){
				header[i].addEventListener('click',()=>{
					if(header[i].classList.contains(activeHeader)){
						return false;
					}
					deactiveElements(header,activeHeader);
					deactiveElements(bodies,activeBody,true);

					header[i].classList.add(activeHeader);
					bodies[i].style.display = 'flex';
					setTimeout(()=>{bodies[i].classList.add(activeBody);},100)
				})
			}
		}
		function insertToInput(input,emoji){
			for(let i=0; i<emoji.length; i++){
				emoji[i].addEventListener('click',()=>{
					let temp = " "+emoji[i].innerText+" ";
					input.value += temp;
				})
			}
		}
		let emojisContainer = emojisPanel();
		parrentContainer.appendChild(emojisContainer);
		tabSwitcher(document.querySelector('.headers'),document.querySelector('.groups'),'activeHeader','activeGroup');
		insertToInput(input,document.querySelectorAll('.emoji'));
		let onmouse =false;
		btn.addEventListener('mouseover',()=>{
			emojisContainer.style.display = 'flex';
			onmouse = true;	
		})
		btn.addEventListener('mouseout',()=>{
			onmouse = false;	
			emojisContainer.style.display = 'none';
		})
		emojisContainer.addEventListener('mouseover',()=>{
			emojisContainer.style.display = 'flex';
			onmouse = true;	
		})
		emojisContainer.addEventListener('mouseout',()=>{
			onmouse = false;	
			emojisContainer.style.display = 'none';
		})
	}
	AddEmojiPanel(document.querySelector('.container'),document.querySelector('.btn'),document.querySelector('input'))
}