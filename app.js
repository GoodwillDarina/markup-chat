$(document).ready(function(){$('a[href^="#"]').click(function(){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-45},1200),e.preventDefault()})}),angular.module("ChatQuest",["ngMaterial"]).controller("CreateFromCtrl",["$scope",function(e){e.user={name:"",email:"",application:{id:"B",name:"Бизнес"}},e.applications=[{id:"B",name:"Бизнес"},{id:"Q",name:"Реалити-квесты"},{id:"F",name:"Искатели"}],e.selectedApplication={id:"B",name:"Бизнес"}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiYW5jaG9yIiwidGhpcyIsInN0b3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiYXR0ciIsIm9mZnNldCIsInRvcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImFwcGxpY2F0aW9uIiwiaWQiLCJhcHBsaWNhdGlvbnMiLCJzZWxlY3RlZEFwcGxpY2F0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBQUMsVUFBQUMsTUFBQSxXQUNBRixFQUFBLGdCQUFBRyxNQUFBLFdBQ0EsR0FBQUMsR0FBQUosRUFBQUssS0FDQUwsR0FBQSxjQUFBTSxPQUFBQyxTQUNBQyxVQUFBUixFQUFBSSxFQUFBSyxLQUFBLFNBQUFDLFNBQUFDLElBQUEsSUFDQSxNQUNBQyxFQUFBQyxxQkFJQUMsUUFBQUMsT0FBQSxhQUFBLGVBQ0FDLFdBQUEsa0JBQUEsU0FBQSxTQUFBQyxHQUNBQSxFQUFBQyxNQUNBQyxLQUFBLEdBQ0FDLE1BQUEsR0FDQUMsYUFBQUMsR0FBQSxJQUFBSCxLQUFBLFdBRUFGLEVBQUFNLGVBQUFELEdBQUEsSUFBQUgsS0FBQSxXQUFBRyxHQUFBLElBQUFILEtBQUEsbUJBQUFHLEdBQUEsSUFBQUgsS0FBQSxhQUNBRixFQUFBTyxxQkFBQUYsR0FBQSxJQUFBSCxLQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJ2FbaHJlZl49XCIjXCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AtNDVcbiAgICAgICAgfSwgMTIwMCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnQ2hhdFF1ZXN0JywgWyduZ01hdGVyaWFsJ10pXG4gICAgLmNvbnRyb2xsZXIoJ0NyZWF0ZUZyb21DdHJsJywgIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgICRzY29wZS51c2VyID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBhcHBsaWNhdGlvbjoge2lkOiAnQicsIG5hbWU6ICfQkdC40LfQvdC10YEnfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuYXBwbGljYXRpb25zID0gW3tpZDogJ0InLCBuYW1lOiAn0JHQuNC30L3QtdGBJ30sIHtpZDogJ1EnLCBuYW1lOiAn0KDQtdCw0LvQuNGC0Lgt0LrQstC10YHRgtGLJ30sIHtpZDogJ0YnLCBuYW1lOiAn0JjRgdC60LDRgtC10LvQuCd9XTtcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQXBwbGljYXRpb24gPSB7aWQ6ICdCJywgbmFtZTogJ9CR0LjQt9C90LXRgSd9O1xuICAgIH1dKTsiXX0=