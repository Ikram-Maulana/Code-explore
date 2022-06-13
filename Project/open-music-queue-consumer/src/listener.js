class Listener {
  constructor(PlaylistsService, mailSender) {
    this._playlistsService = PlaylistsService;
    this._mailSender = mailSender;

    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const {
        playlistId,
        targetEmail,
      } = JSON.parse(message.content.toString());

      const playlistsSongs = await this._playlistsService.getPlaylists(playlistId);
      const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(playlistsSongs));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
