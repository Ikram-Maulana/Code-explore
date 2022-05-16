exports.up = (pgm) => {
  // Membuat user baru
  pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_note', 'old_note', 'old_note', 'old_note')");

  // Mengubah nilai owner pada note yang owner-nya bernilai NULL
  pgm.sql("UPDATE notes SET owner = 'old_note' WHERE owner = NULL");

  // Memberikan constraint foreign key pada owner terhadap kolom id dari tabel users
  pgm.addConstraint('notes', 'fk_notes.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  // Menghapus constraint fk.notes.owner_users.id
  pgm.dropConstraint('notes', 'fk_notes.owner_users.id');

  // Mengubah nilai owner old_note pada note menjadi NULL
  pgm.sql("UPDATE notes SET owner = NULL WHERE owner = 'old_note'");

  // Menghapus user baru
  pgm.sql("DELETE FROM users WHERE id = 'old_note'");
};
