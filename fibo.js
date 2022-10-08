function fibonacci() {
    n = document.getElementById("fibonum").value; //1
    const fib = [0, 1] //1

    for (let i = 2; i < n; i ++) { // 2n+2
        fib[i] = fib[i - 1] + fib[i - 2] // 2n
    }
    
    document.getElementById("fibo").innerHTML = fib // 1

    // Big O time = 4n+5
    // Big O Space = n+1
}
