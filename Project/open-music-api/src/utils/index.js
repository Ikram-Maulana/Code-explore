const mapDBAlbumsToModel = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year,
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

const mapDBDetailSongsToModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
});

module.exports = {
  mapDBAlbumsToModel,
  mapDBSongsToModel,
  mapDBDetailSongsToModel,
};
