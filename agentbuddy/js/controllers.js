'use strict';

/* Controllers */


var agentAssistControllers = angular.module('agentAssistControllers', []);

agentAssistControllers.controller('NotesListCtrl', ['$scope', 'AgentAssistNotes',
    function($scope, AgentAssistNotes) {
        $scope.notes = AgentAssistNotes;
        $scope.col1Notes = AgentAssistNotes.slice(0, AgentAssistNotes.length / 2);
        $scope.col2Notes = AgentAssistNotes.slice(AgentAssistNotes.length / 2);
        $scope.bodytxt = '';
        $scope.highlightNote = function (note) {
            note.selected = !note.selected;
            if (note.selected) {
                var range = $('#bodytxt').textrange();
                var startPos = range.position;
                $('#bodytxt').textrange('insert', note.ResponseFull__c);
                $('#bodytxt').textrange('setcursor', startPos + note.ResponseFull__c.length); // Unselect the text
                $scope.bodytxt = $('#bodytxt').val();
            } else {
                $scope.bodytxt = $scope.bodytxt.replace(note.ResponseFull__c, '');
            }
        }
        $scope.resetNotes = function () {
            $scope.notes.forEach(function(note) {
                note.selected = false;
            });
        }
        $scope.incrementUsageCount = function() {
            //alert("y");
        }
    }


]);

