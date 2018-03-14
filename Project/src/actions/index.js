import channeMix from '../api/channelMix'

export const fetchChannelMixData  = () => dispatch => {
  channeMix.fetchChannelMixData(data => {
    dispatch(receivedData(data))
  })
};

const receivedData = data => ({
  type: 'CHANNEL_MIX',
  data: data.data
});
