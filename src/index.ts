const main = async () => {
  try {
    const d3 = await import("d3-dsv")
    console.log("hi")
  } catch (e) {
    console.log(e, "error")
  }
}

main()
