FROM gitpod/workspace-full

FROM gitpod/workspace-mysql

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

# Install `pm2`
RUN npm install pm2 -g \
# Set MySQL can connect outside.
    && sudo echo "
[mysqld_safe]
socket          = /var/run/mysqld/mysqld.sock
nice            = 0

[mysqld]
user            = gitpod
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
port            = 3306
basedir         = /usr
datadir         = /workspace/mysql
tmpdir          = /tmp
lc-messages-dir = /usr/share/mysql
skip-external-locking
bind-address            = 127.0.0.1

key_buffer_size         = 16M
max_allowed_packet      = 16M
thread_stack            = 192K
thread_cache_size   = 8

myisam-recover-options  = BACKUP

general_log_file        = /var/log/mysql/mysql.log
general_log             = 1
log_error               = /var/log/mysql/error.log" >> /etc/mysql/mysql.conf.d/mysqld.cnf