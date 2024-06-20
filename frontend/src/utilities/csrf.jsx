import React from "react"

export function getCookie(name) {
  let cookieValue = null
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";")
    cookies.forEach((cookie) => {
      const trimmedCookie = cookie.trim()
      if (trimmedCookie.startsWith(`${name}=`)) {
        cookieValue = decodeURIComponent(
          trimmedCookie.substring(name.length + 1)
        )
      }
    })
  }
  return cookieValue
}

const csrftoken = getCookie("csrftoken")

const CSRFToken = () => {
  return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
}
export default CSRFToken
