

const difference_of_two_numbers = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello difference_of_two_numbers`}))
  res.end()
  
}

export default difference_of_two_numbers
