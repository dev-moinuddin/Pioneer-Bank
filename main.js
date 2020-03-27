
	//login event handler
	const loginBtn = document.getElementById("login");
	loginBtn.addEventListener("click", function () {
		const loginArea = document.getElementById('login-area');
		loginArea.style.display = 'none';
		const transferArea = document.getElementById('transfer-area');
		transferArea.style.display = 'block';
	})

	// Deposit event handler

	const DepositBtn = document.getElementById('DepositBtn');
	DepositBtn.addEventListener('click', function(){
		const DepositAmount = document.getElementById('DepositAmount').value;
		const DepositNum = parseFloat(DepositAmount);
		
		const curentDeposit = document.getElementById('curentDeposit').innerText;
		const curentDepositNum = parseFloat(curentDeposit);
		const totalDeposit = DepositNum + curentDepositNum;
		
		document.getElementById('curentDeposit').innerText = totalDeposit;
		
		document.getElementById('DepositAmount').value = "";
		

		const currentBlance = document.getElementById('currentBlance').innerText;
		const currentBlanceNum = parseFloat(currentBlance);
		const totalBlance = totalDeposit + currentBlanceNum;

		document.getElementById('currentBlance').innerText = totalBlance;
	})

	// withdraw event handler

	const withdrawBtn = document.getElementById('withdrawBtn');
	withdrawBtn.addEventListener('click', function(){
		const withdrawAmount = document.getElementById('withdrawAmount').value;
		const withdrawNum = parseFloat(withdrawAmount);

		const withdrawBlance = document.getElementById('withdrawBlance').innerText;
		const withdrawBlanceNum = parseFloat(withdrawBlance);

		const totalWithdrew = withdrawNum + withdrawBlanceNum;

		document.getElementById('withdrawBlance').innerText = totalWithdrew;

		document.getElementById('withdrawAmount').value = "";

	})