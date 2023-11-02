/////--------1------/////

let food=prompt("Choise your order please");
	let answer=new Promise((resolve,reject)=>{
		if(food=="pizza"){	
			setTimeout(()=>{
				resolve("Your order is taken and it is on the way");
			},5000);
		}
		else{
			setTimeout(()=>{
				reject("Your order cancelled")},2000);
			}
		})
			answer.then((msg)=>{
				console.log(msg);
			}).catch((err)=>{
				console.log(err);
			})