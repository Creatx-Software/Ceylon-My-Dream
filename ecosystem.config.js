module.exports = {
  apps: [
    {
      name: 'ceylon-my-dream',
      script: 'npm',
      args: 'run start -- -p 3004',
      cwd: '/var/www/vhosts/creatxsoftware.com/cmd.creatxsoftware.com',
      exec_mode: 'cluster',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3004,
      },
      error_file: '/var/www/vhosts/creatxsoftware.com/cmd.creatxsoftware.com/logs/pm2-error.log',
      out_file: '/var/www/vhosts/creatxsoftware.com/cmd.creatxsoftware.com/logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
}
