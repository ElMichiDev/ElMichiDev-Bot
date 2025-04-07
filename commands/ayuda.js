module.exports = {
  name: 'ayuda',
  description: 'Muestra los comandos disponibles',
  execute(message) {
    message.reply('📜 Comandos disponibles:\n`!github` - Muestra tu GitHub\n`!web` - Muestra tu sitio web\n`!ayuda` - Muestra este mensaje');
  }
};
