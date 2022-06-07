const mapDBAlbumsToModel = ({
  id,
  name,
  year,
  cover,
}) => ({
  id,
  name,
  year,
  coverUrl: cover,
});

const mapDBSongsToModel = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

const mapDBDetailSongsToModel = ({albumId, ...args}) => ({
  ...args,
  albumId,
});

const mapDBActivityToModel = ({
  user_id,
  song_id,
  action,
  time,
}) => ({
  username: user_id,
  title: song_id,
  action,
  time,
});


module.exports = {
  mapDBAlbumsToModel,
  mapDBSongsToModel,
  mapDBDetailSongsToModel,
  mapDBActivityToModel,
};
