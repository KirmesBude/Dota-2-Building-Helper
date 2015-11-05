"use strict";

function OnPlayerLumberChanged ( args ) {
	var iPlayerID = Players.GetLocalPlayer()
	var hSelectedUnit = Players.GetLocalPlayerPortraitUnit()
	var lumber = args.lumber
	$.Msg("Player "+iPlayerID+" Lumber: "+lumber)
	if (Entities.IsControllableByPlayer(hSelectedUnit.index, iPlayerID))
	{
		$('#LumberText').text = lumber
	}
	else
	{
		$('#LumberTextDisabled').text = lumber
	};
	
}

(function () {
	GameEvents.Subscribe( "player_lumber_changed", OnPlayerLumberChanged );
})();