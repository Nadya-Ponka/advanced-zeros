module.exports = function getZerosCount(number, base) {
  // your implementation
 // let primeArray;
  var prime_class = {};
  primes(base); //factor base into products of prime powers
  
  let zeros = [];
  prime_class.num.map((x,index) => {
	  let temp=0;
	  for (let i=x; number/i>1; i*=x) { temp += Math.floor(number/i);}
	  zeros.push(Math.floor(temp/prime_class.count[index]));
  });
    return Math.min(...zeros); 
	
	
	function primes(base) {
	
	let array_of_primes = [], count = [], num = [];
	let j = 0, i = 0; prime = 2 ;
	let osnovanie = base;
	
	do {
	 if (osnovanie % prime == 0) {
	  array_of_primes[j] = prime;
	  j++;
	  osnovanie /= prime;
	 } else { prime++; }
	} while (prime < osnovanie);
	
	if (base!=2) array_of_primes[j] = prime;
	
	num[i]=array_of_primes[0];
	count[i]=1;

	for (j=1; j < array_of_primes.length; j++) {
		if (num[i]==array_of_primes[j]) {count[i]++;}
		else {i++; num[i]=array_of_primes[j]; count[i]=1;}
	}  
	prime_class.num = num;
	prime_class.count = count;
  }
}

