const { generateRoster } = require('../roster');
describe("Board", function() {
  let board;

  beforeEach(function () {
    board = generateRoster();
  });

  describe("place header", function() {
    it("should return the correct piece for a given starting position", function () {
      expect(board[1][3][0]).toEqual(14);
      expect(board[1][3]).toEqual([14, 32, 7, 0, 23]);
    });
  });

  describe("init board", function() {
    it ("should generate an 4x6 array", function(){
      expect(board.length).toEqual(6);
      for (let i = 0; i < board.length; i++) {
        expect(board[i].length).toEqual(4);
      }
    });
  });
});
