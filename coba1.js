function coba(params) {
  for (let i = 1; i <= params; i++) {
    if ((i % params) - 1 == 0 && (i % params) - 5 == 0 && (i % params) - 3 == 0) console.log("*");
    console.log(i);
  }
}
coba(10);
