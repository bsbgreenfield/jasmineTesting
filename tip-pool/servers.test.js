describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  }); 

  it('should update serverTbody correctly after submitServerInfo and updateServerTable', function(){
    submitServerInfo();
    updateServerTable();

    let td = document.querySelectorAll('#serverTable tbody tr td')
    expect(td[0].innerText).toEqual("Alice")
    expect(td[1].innerText).toEqual('$0.00')

  })

 afterEach(function() {
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
  }); 
});
