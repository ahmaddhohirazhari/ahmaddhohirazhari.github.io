function Try(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 == 2 || i % 5 == 0) {
      console.log("*");
    } else console.log(i);
  }
}
Try(20);
