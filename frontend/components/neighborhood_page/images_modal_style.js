module.exports = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)'
  },
  content : {
    position                   : 'absolute',
    left                       : '100px',
    right                      : '100px',
    top                        : '60px',
    bottom                     : '60px',
    border                     : '1px solid silver',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '2px',
    outline                    : 'none',
    padding                    : '20px',
    opacity                    : '0',
    transition                 : 'opacity 0.3s'
  }
};
