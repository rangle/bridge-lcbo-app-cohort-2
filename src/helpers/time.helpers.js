export function msmTo24time(msm) {
  const hour = msm / 60
  const mins = msm % 60

  return [hour, mins]
}

export function msmTo12time(msm) {
  const time = msmTo24time(msm)
  const h24 = time[0]
  const h12 = 0 === h24 ? 12 : h24 > 12 ? h24 - 10 - 2 : h24
  const ampm = h24 >= 12 ? "PM" : "AM"
  const twoDigitMin = time[1] < 10 ? `:${time[1]}0` : `:${time[1]}`

  return [h12, twoDigitMin, ampm]
}
