const url = "https://api.github.com/users/john-smilga/repos?per_page=200"

const fetchRepos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const newData = data.reduce((total, repo) => {
    const { language } = repo
    // if (language) {
    //   if (total[language]) {
    //     total[language] += 1
    //   } else {
    //     total[language] = 1
    //   }
    // }

    if (language) {
      total[language] = total[language] + 1 || 1
    }
    return total
  }, {})
  console.log(newData)
}

fetchRepos()
