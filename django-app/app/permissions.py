from rest_framework import permissions

# class CheckGroup(permissions.BasePermission): #Custom permission to only allow users within a specified group
    
#     def __init__(self, group_name):
#         self.group_name = group_name

#     def has_permission(self, request, view):
#         # Check if the user is in the specified group
#         return request.user.groups.filter(name=self.group_name).exists()

# def check_group(group_name): #Factory function to create CheckGroup permission with specified group name.

#     return CheckGroup(group_name)

class CheckGroup(permissions.BasePermission):
    _group_name = None

    @classmethod
    def for_group(cls, group_name):
        cls._group_name = group_name
        return cls

    def has_permission(self, request, view):
        if not self._group_name:
            return False  # Default to False if no group name is set
        return request.user.groups.filter(name=self._group_name).exists()