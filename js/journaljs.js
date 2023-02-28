window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.getElementById("new-task");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		if (task != ''){
		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	}
	});
});





function count_water_icons(){
	const num_water_icons = document.getElementById('count-water-icons').innerHTML;
	document.getElementById('count-water-icons').innerHTML = Number(num_water_icons) + 1;
}

function count_walk_icons(){
    const num_water_icons = document.getElementById('count-walk-icons').innerHTML;
	document.getElementById('count-walk-icons').innerHTML = Number(num_water_icons) + 1;

 
}

function showModal(){
	var my_modal = document.getElementById("my_modal");
	my_modal.style.display = "block";
}

function closeModal(){
	var my_modal = document.getElementById("my_modal");
	my_modal.style.display = "none";
}

//setTimeout(showModal,1000);
// $(".modal-trigger").click(function(e){
// 	e.preventDefault();
// 	dataModal = $(this).attr("data-modal");
// 	$("#" + dataModal).css({"display":"block"});
// 	// $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
//   });
  
//   $(".close-modal, .modal-sandbox").click(function(){
// 	$(".modal").css({"display":"none"});
// 	// $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
//   });