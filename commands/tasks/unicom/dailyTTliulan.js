var dailyTTliulan = {
  doTask: async (axios, options) => {
    await require('./rewardVideo').doTask(axios, {
      ...options,
      acid: 'AC20200814162815',
      taskId: '6c54032f662c4d2bb576872ed408232c',
      codeId: 945535616,
      reward_name: '恭喜获得大鸡巴×'
    })
  }
}
module.exports = dailyTTliulan